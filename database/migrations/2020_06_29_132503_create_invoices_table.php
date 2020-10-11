<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->bigInteger('business_id');
            $table->string('title');
            $table->bigInteger('type')->default(1);
            $table->bigInteger('recurring')->default(0);
            $table->bigInteger('parent_id');
            $table->string('summary');
            $table->string('number');
            $table->string('poso_number');
            $table->bigInteger('customer');
            $table->date('date');
            $table->bigInteger('tax');
            $table->bigInteger('tax_id')->default(0);
            $table->bigInteger('discount');
            $table->date('payment_due');
            $table->date('expire_on');
            $table->bigInteger('due_limit');
            $table->longText('footer_note');
            $table->decimal('sub_total');
            $table->decimal('grand_total');
            $table->decimal('convert_total');
            $table->bigInteger('status')->default(0);
            $table->bigInteger('is_sent')->default(0);
            $table->bigInteger('is_completed')->default(0);
            $table->dateTime('sent_date');
            $table->date('recurring_start');
            $table->date('recurring_end');
            $table->string('frequency');
            $table->date('next_payment');
            $table->bigInteger('frequency_count')->default(0);
            $table->dateTime('auto_send');
            $table->date('send_myself');
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
        Schema::dropIfExists('invoices');
    }
}
