<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLand extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    protected $table = 'user_lands';
    public $timestamps = false;
    protected $fillable = [
			'user_id',
			'land_id',
			'status',
		];
}
