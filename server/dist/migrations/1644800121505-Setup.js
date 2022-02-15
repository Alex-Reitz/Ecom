"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setup1644800121505 = void 0;
class Setup1644800121505 {
    constructor() {
        this.name = 'Setup1644800121505';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product_category" ("id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "idId" integer, CONSTRAINT "UQ_23f702bea94e5adcb912d41a149" UNIQUE ("Name"), CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_inventory" ("id" SERIAL NOT NULL, "Quantity" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_08e8fc382738daa77c47d4c4a9c" UNIQUE ("Quantity"), CONSTRAINT "PK_84e9362e0a5bf063e561d9452ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Description" character varying NOT NULL, "SKU" character varying NOT NULL, "Price" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ae8864d8debd7a5b83da775e09c" UNIQUE ("Name"), CONSTRAINT "UQ_d750d40dee7a63a316039f246be" UNIQUE ("SKU"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "discount" ("id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Description" character varying NOT NULL, "Discount_percent" integer NOT NULL, "Active" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "idId" integer, CONSTRAINT "UQ_518090b1f1297314f2b36f9d7b6" UNIQUE ("Name"), CONSTRAINT "UQ_9d99e9b4e0a7234383b8b3032c3" UNIQUE ("Discount_percent"), CONSTRAINT "UQ_fb35e1422e6e064803dd5efc000" UNIQUE ("Active"), CONSTRAINT "PK_d05d8712e429673e459e7f1cddb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_category" ADD CONSTRAINT "FK_f139b2c3afbaf8d6a2ae15e8631" FOREIGN KEY ("idId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "discount" ADD CONSTRAINT "FK_35ec4a5e738604a5274aad9f472" FOREIGN KEY ("idId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "discount" DROP CONSTRAINT "FK_35ec4a5e738604a5274aad9f472"`);
        await queryRunner.query(`ALTER TABLE "product_category" DROP CONSTRAINT "FK_f139b2c3afbaf8d6a2ae15e8631"`);
        await queryRunner.query(`DROP TABLE "discount"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "product_inventory"`);
        await queryRunner.query(`DROP TABLE "product_category"`);
    }
}
exports.Setup1644800121505 = Setup1644800121505;
//# sourceMappingURL=1644800121505-Setup.js.map