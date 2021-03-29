import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumn1616976795814 implements MigrationInterface {
    name = 'AddColumn1616976795814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "todo_item"."done" IS NULL`);
        await queryRunner.query(`ALTER TABLE "todo_item" ALTER COLUMN "done" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo_item" ALTER COLUMN "done" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "todo_item"."done" IS NULL`);
    }

}
