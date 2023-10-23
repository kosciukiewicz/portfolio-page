/// <reference types="react-scripts" />
declare module "*.pdf";
declare module "*.md" {
  const value: string;
  export default value;
}
