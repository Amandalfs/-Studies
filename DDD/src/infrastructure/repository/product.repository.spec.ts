import { execSync } from "child_process";
import { Product } from "../../domain/entity/product";
import { v4 as uuid } from "uuid";
import { prisma } from "../db/prisma";
import { ProductRepository } from "./product.repository";

describe("Product repository unit tests", ()=>{
    beforeEach(async ()=>{
        execSync("npx prisma migrate deploy");
    });

    afterEach(async ()=>{
        execSync("npx prisma migrate reset --force");
    });

    it("Should create a product", async ()=>{
        const productRepository = new ProductRepository();
        const product = new Product(uuid(),"Product 1", 100);
        await productRepository.create(product);

        const productModel = await prisma.product.findUnique({
            where: {
                id: product.id
            }
        })
        expect(productModel).toStrictEqual({
            id: product.id,
            name: product.name,
            price: product.price
        })
    })

    it("Should update a product", async ()=>{
        const productRepository = new ProductRepository();
        const product = new Product(uuid(),"Product 1", 100);
        await productRepository.create(product);

        product.nameChange("Product 2");
        await productRepository.update(product);

        const productModel = await prisma.product.findUnique({
            where: {
                id: product.id
            }
        })
        expect(productModel).toStrictEqual({
            id: product.id,
            name: product.name,
            price: product.price
        })
    })

    it("Should find a product", async ()=>{
        const productRepository = new ProductRepository();
        const product = new Product(uuid(),"Product 1", 100);
        await productRepository.create(product);
    
        const productModel = await productRepository.find(product.id);
        expect(productModel).toStrictEqual(product);
    })

    it("Should find all products", async ()=>{
        const productRepository = new ProductRepository();
        const product = new Product(uuid(),"Product 1", 100);
        await productRepository.create(product);
        const product2 = new Product(uuid(),"Product 2", 200);
        await productRepository.create(product2);
        const product3 = new Product(uuid(),"Product 3", 300);
        await productRepository.create(product3);

        const products = await productRepository.findAll();
        expect(products.length).toBe(3);
        expect(products).toContainEqual(product);
        expect(products).toContainEqual(product2);
        expect(products).toContainEqual(product3);

    })

    it("Should throw an error if no product is found.", ()=>{
        const productRepository = new ProductRepository();
        const product = new Product(uuid(),"Product 1", 100);
        expect(async ()=>{
            await productRepository.find(product.id);
        }).rejects.toThrowError("Product not found.");
    })

    it("Should throw an error if no products is found.", ()=>{
        const productRepository = new ProductRepository();
        expect(async ()=>{
            await productRepository.findAll();
        }).rejects.toThrowError("Products not found.");
    })
})