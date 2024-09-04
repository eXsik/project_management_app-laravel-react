import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Show = ({ auth, project }) => {
    console.log("projekt", project);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Task #{project.id} - {project.name}
                </h2>
            }
        >
            <Head title={`Project #${project.id} - ${project.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h4 className="font-medium text-xl text-slate-600 dark:text-white">
                        Filters
                    </h4>
                    {/* <div className="w-1/3 flex items-center my-4">
                        <TextInput
                            className="w-full"
                            defaultValue={queryParams.name}
                            placeholder="Project Name"
                            onBlur={(e) =>
                                searchFieldChanged("name", e.target.value)
                            }
                            onKeyPress={(e) => onKeyPress("name", e)}
                        />
                        <Select
                            className="w-full ml-4"
                            defaultValue={queryParams.status}
                            onChange={(e) =>
                                searchFieldChanged("status", e.target.value)
                            }
                        >
                            <option value="">Select Status</option>
                            <option value="pending">Pending</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </Select>
                    </div> */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 mt">
                            <div>
                                <img
                                    src={project.image_path}
                                    alt=""
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div>
                                    <h2 className="font-bold text-2xl ">
                                        Project #{project.id}
                                    </h2>
                                </div>
                                <div>
                                    <p className="">
                                        <span className="font-bold text-lg">
                                            Name:
                                        </span>{" "}
                                        {project.name}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold text-lg ">
                                        Status:{" "}
                                        <span
                                            className={
                                                "px-3 py-1 rounded text-nowrap " +
                                                PROJECT_STATUS_CLASS_MAP[
                                                    project.status
                                                ]
                                            }
                                        >
                                            {
                                                PROJECT_STATUS_TEXT_MAP[
                                                    project.status
                                                ]
                                            }
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <p className="">
                                            <span className="font-bold text-lg">
                                                Due Date:
                                            </span>{" "}
                                            {project.due_date}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="">
                                            <span className="font-bold text-lg">
                                                Created:{" "}
                                            </span>
                                            {project.created_at}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="">
                                            <span className="font-bold text-lg">
                                                Updated by:{" "}
                                            </span>
                                            {project.updatedBy.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-lg">
                                    Description:{" "}
                                </label>
                                <p className="">{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
