import {MigrationInterface, QueryRunner} from "typeorm";

export class projectTable1648804490176 implements MigrationInterface {
    name = 'projectTable1648804490176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "pro_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "pro_name" character varying NOT NULL, "status" character varying NOT NULL, "desc" character varying NOT NULL, CONSTRAINT "PK_2ae80c69c95f9eea1d706bccf66" PRIMARY KEY ("pro_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
