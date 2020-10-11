<?php

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('roles')->delete();
        
        \DB::table('roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'admin',
                'display_name' => 'Admin',
                'created_at' => '2020-06-25 16:23:22',
                'updated_at' => '2020-06-25 16:23:22',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'owner',
                'display_name' => 'Owner',
                'created_at' => '2020-06-25 16:23:22',
                'updated_at' => '2020-06-25 16:23:22',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'employee',
                'display_name' => 'Employee',
                'created_at' => '2020-06-25 16:23:22',
                'updated_at' => '2020-06-25 16:23:22',
            ),
        ));
    }
}
