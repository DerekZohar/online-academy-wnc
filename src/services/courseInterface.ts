import Category from "./category";
import { Feedback } from "./feedback";
import subCategory from "./subCategory";
import Teacher from "./teacherInterface";

export default interface Course{
    "id": string,
    "price": number,
    "rating": number,
    "discount": number,
    "name": string,
    "categoryId": string,
    "subCategoryId": string,
    "feedback": Array<Feedback>,
    "teacherId": string,
    "samplePictures": any,
    "createdDate": string,
    "lastEdited": string,
    "description": string,
    "overview": string,
    "teacher": Teacher,
    "subCategory": subCategory,
    "category": Category
    "lessons": [],
}