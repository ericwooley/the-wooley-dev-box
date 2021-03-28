import {MigrationInterface, QueryRunner} from "typeorm";

export class AddList1616956800438 implements MigrationInterface {
    name = 'AddList1616956800438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "list" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d8feafd203525d5f9c37b3ed3b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todo_item" ADD "listId" integer`);
        await queryRunner.query(`ALTER TABLE "todo_item" ADD CONSTRAINT "FK_8d55427560be1f77fe42f541926" FOREIGN KEY ("listId") REFERENCES "list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo_item" DROP CONSTRAINT "FK_8d55427560be1f77fe42f541926"`);
        await queryRunner.query(`ALTER TABLE "todo_item" DROP COLUMN "listId"`);
        await queryRunner.query(`DROP TABLE "list"`);
    }

}
