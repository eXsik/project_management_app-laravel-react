import Pagination from "@/Components/Pagination";
import Select from "@/Components/Select";
import TextInput from "@/Components/TextInput";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

function Index({ auth, tasks, queryParams = null }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("task.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tasks ({tasks.meta?.total})
                </h2>
            }
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h4 className="font-medium text-xl text-slate-600 dark:text-white">
                        Filters
                    </h4>
                    <div className="w-1/3 flex items-center my-4">
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
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <TableHeading
                                                name="id"
                                                sortable
                                                queryParams={queryParams}
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                            >
                                                ID
                                            </TableHeading>
                                            <TableHeading name="image">
                                                Image
                                            </TableHeading>
                                            <TableHeading
                                                name="name"
                                                sortable
                                                queryParams={queryParams}
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                            >
                                                Name
                                            </TableHeading>
                                            <TableHeading
                                                name="status"
                                                sortable
                                                queryParams={queryParams}
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                            >
                                                Status
                                            </TableHeading>
                                            <TableHeading
                                                name="created_at"
                                                sortable
                                                queryParams={queryParams}
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                            >
                                                Created At
                                            </TableHeading>
                                            <TableHeading
                                                name="due_date"
                                                sortable
                                                queryParams={queryParams}
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                            >
                                                Due Date
                                            </TableHeading>
                                            <TableHeading name="created_by">
                                                Created by
                                            </TableHeading>
                                            <TableHeading name="actions">
                                                Actions
                                            </TableHeading>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {tasks.data.map((task) => (
                                            <tr
                                                key={task.id}
                                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-blue-950"
                                            >
                                                <td className="px-6 py-4">
                                                    {task.id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <img
                                                        src={task.image_path}
                                                        alt={
                                                            task.name + " image"
                                                        }
                                                        width={"60px"}
                                                    />
                                                </td>
                                                <td className="px-6 py-4">
                                                    {task.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span
                                                        className={
                                                            "px-3 py-1 rounded text-nowrap " +
                                                            TASK_STATUS_CLASS_MAP[
                                                                task.status
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            TASK_STATUS_TEXT_MAP[
                                                                task.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-nowrap">
                                                    {task.created_at}
                                                </td>
                                                <td className="px-6 py-4 text-nowrap">
                                                    {task.due_date}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {task.createdBy.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            href={route(
                                                                "task.edit",
                                                                task.id
                                                            )}
                                                            className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-sm"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            className="px-3 py-1.5 bg-red-500 hover:bg-red-600 transition-colors text-white rounded-sm ml-2"
                                                            href={route(
                                                                "task.destroy",
                                                                task.id
                                                            )}
                                                        >
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={tasks.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
