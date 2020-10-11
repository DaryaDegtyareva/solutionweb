<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages_features', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();;
            $table->bigInteger('basic');
            $table->bigInteger('standared');
            $table->bigInteger('premium');
            $table->bigInteger('year_basic');
            $table->bigInteger('year_standared');
            $table->bigInteger('year_premium');
            $table->string('type');
            $table->longText('text');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages_features');
    }
}
