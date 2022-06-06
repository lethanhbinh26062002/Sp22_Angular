export type Product = {
  _id: string, // nếu dùng nodejs thì là string
  name: string,
  status:number 
};
export type ProductCreate = {
  name?: string, 
  status?:number
};