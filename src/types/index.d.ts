export interface TokenData {
    userId: number;
    firstName: string;
    roleName: string;
};

//En este tipo, incluimos DENTRO DEL REQUEST, LA PROPIEDAD TOKENDATA, QUE SE COMPONE DE USERID Y ROLENAME

declare global {
    // Express
    namespace Express {
        export interface Request {
            tokenData: TokenData;
        }
    }
}