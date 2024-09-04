<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name'=> $this->name,
            'description' => $this->description,
            'due_date' => (new Carbon($this->due_date))->format('d-m-Y'),
            'priority' => $this->priority,
            'status' => $this->status,
            'image_path' => $this->image_path,
            'assignedUser' => $this->assignedUser ? new UserResource($this->assignedUser) : null,
            'project' => new ProjectResource($this->project),
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
            'created_at' => (new Carbon($this->created_at))->format('d-m-Y')
        ];
    }
}

// $table->id();
// $table->string('name');
// $table->longText('description')->nullable();
// $table->string('image_path')->nullable();
// $table->string('status');
// $table->string('priority');
// $table->string('due_date')->nullable();
// $table->foreignId('assigned_user_id')->constrained('users');
// $table->foreignId('created_by')->constrained('users');
// $table->foreignId('updated_by')->constrained('users');
// $table->foreignId('project_id')->constrained('projects');
// $table->timestamps();