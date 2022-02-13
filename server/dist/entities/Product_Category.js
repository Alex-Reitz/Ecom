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
exports.Product_Category = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Products_1 = require("./Products");
let Product_Category = class Product_Category extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.ManyToOne)(() => Products_1.Products, (products) => products.category_id),
    __metadata("design:type", Products_1.Products)
], Product_Category.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Product_Category.prototype, "Name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: false }),
    __metadata("design:type", String)
], Product_Category.prototype, "Description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Product_Category.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Product_Category.prototype, "updatedAt", void 0);
Product_Category = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Product_Category);
exports.Product_Category = Product_Category;
//# sourceMappingURL=Product_Category.js.map