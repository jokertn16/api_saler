import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity(
    {
        name: "employees",
    }
)

export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ default: 0 })
    id_count_in_restaurant: number;

    @Column({ default: "" })
    username: string;

    @Column({ default: 0 })
    restaurant_id: number;

    @Column({ default: 0 })
    employee_role_id: number;

    @Column({ default: 0 })
    restaurant_brand_id: number;

    @Column({ default: 0  })
    branch_id: number;

    @Column({ default: 0  })
    is_working: number;

    @Column({ default: 0  })
    status: number;
    
    @Column({ default: 0  })
    is_quit_job: number;

    @Column({ default: "" })
    jwt_token: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}