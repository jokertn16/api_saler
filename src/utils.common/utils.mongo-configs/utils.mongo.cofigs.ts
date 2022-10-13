export class ConnectDatabaseMongo {
    constructor() { }

    public connectMongo(): string {
        let result: string = `${process.env.DB_CONNECTION}://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
        return result;
    }
}