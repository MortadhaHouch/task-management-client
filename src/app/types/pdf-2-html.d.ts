declare module "pdf2html"{
    html:(file:string):Promise<string>=>{}
    text:(file:string):Promise<string>=>{}
    pages:(file:string):Promise<string[]>=>{}
    pages:(file:string,{options:{text:boolean}}):Promise<string[]>=>{}
}