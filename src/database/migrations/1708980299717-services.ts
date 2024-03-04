import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Services1708980299717 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "services",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "service_name",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "description",
                        type: "text",
                        length: "1000",
                        isNullable: false
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");
    }

}
