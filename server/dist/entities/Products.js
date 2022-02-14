"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Product_Category_1 = require("./Product_Category");
const Discount_1 = require("./Discount");
const Product_Inventory_1 = require("./Product_Inventory");
let Products = class Products extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Products.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Products.prototype, "Name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: false }),
    __metadata("design:type", String)
], Products.prototype, "Description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Products.prototype, "SKU", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Product_Category_1.Product_Category, (product_category) => product_category.id),
    __metadata("design:type", Product_Category_1.Product_Category)
], Products.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Product_Inventory_1.Product_Inventory, (product_inventory) => product_inventory.id),
    __metadata("design:type", Product_Inventory_1.Product_Inventory)
], Products.prototype, "inventory_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: false }),
    __metadata("design:type", Number)
], Products.prototype, "Price", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Discount_1.Discount, (discount) => discount.id),
    __metadata("design:type", Discount_1.Discount)
], Products.prototype, "discount_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Products.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Products.prototype, "updatedAt", void 0);
Products = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Products);
exports.Products = Products;
//# sourceMappingURL=Products.js.map