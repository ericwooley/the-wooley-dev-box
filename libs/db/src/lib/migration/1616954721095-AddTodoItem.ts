import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTodoItem1616954721095 implements MigrationInterface {
    name = 'AddTodoItem1616954721095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo_item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "done" boolean NOT NULL, CONSTRAINT "PK_d454c4b9eac15cc27c2ed8e4138" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo_item"`);
    }

}
