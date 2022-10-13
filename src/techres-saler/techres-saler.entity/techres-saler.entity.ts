import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity(
    {
        name: "techres_salers",
    }
)

export class TechresSaler extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    techres_saler_role_id: number;

    @Column({ default: 0 })
    techres_saler_leader_id: number;

    @Column({ default: new Date() })
    birthday: Date;

    @Column({ default: "" })
    avatar: string;

    @Column({ default: "" })
    name: string;

    @Column({ default: 0 })
    gender: number;

    @Column({ default: "" })
    prefix: string;

    @Column({ default: "" })
    normalize_name: string;

    @Column({ default: "" })
    phone: string;

    @Column({ default: "" })
    address: string;

    @Column({ default: "" })
    email: string;

    @Column({ default: "" })
    bank_name: string;

    @Column({ default: "" })
    bank_account_name: string;

    @Column({ default: "" })
    bank_account_number: string;

    @Column({ default: "" })
    bank_account_branch: string;

    @Column({ default: "" })
    verify_code: string;

    @Column({ default: 0 })
    verify_fail_count: number;

    @Column({ default: 0 })
    is_locked: number

    @Column({ default: 0 })
    city_id: number;

    @Column({ default: 0 })
    district_id: number;

    @Column({ default: 0 })
    ward_id: number;

    @Column({ default: new Date() })
    join_date: Date;

    @Column({ default: "" })
    jwt_token: string;

    @Column({ default: new Date() })
    created_at: Date;

    @Column({ default: new Date() })
    updated_at: Date;


}