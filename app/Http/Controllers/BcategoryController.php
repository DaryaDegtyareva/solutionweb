<?php

namespace App\Http\Controllers;

use App\Bcategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class BcategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Bcategory::select('id', 'name')->orderBy('created_at', 'desc')->get();
        return response()->json($data);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $value = $request->input('name');
        $post = new Bcategory;
        $post->name = $request->input('name');
        $post->save();
        return response()->json($value);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bcategory  $bcategory
     * @return \Illuminate\Http\Response
     */
    public function show(Bcategory $bcategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bcategory  $bcategory
     * @return \Illuminate\Http\Response
     */
    public function edit(Bcategory $bcategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bcategory  $bcategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bcategory $bcategory)
    {
        $id = $request->input('id');
        $post = Bcategory::find($id);
        $post->name = $request->input('name');
        $post->save();
        return response()->json($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bcategory  $bcategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Bcategory::destroy($id);
        return response()->json("ok");

    }
}
