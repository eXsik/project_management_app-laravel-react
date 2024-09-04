import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { router } from "@inertiajs/react";
import React from "react";

function TableHeading({ name, sortable = false, queryParams, children }) {
    const onSortChanged = (name) => {
        if (name === queryParams.sort_field) {
            queryParams.sort_direction === "asc"
                ? (queryParams.sort_direction = "desc")
                : (queryParams.sort_direction = "asc");
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }

        let currentRoute = route().current();

        router.get(route(currentRoute), queryParams);
    };

    return (
        <th
            onClick={() => onSortChanged(name)}
            scope="col"
            className={"px-6 py-3"}
        >
            <div className="cursor-pointer flex items-center justify-between gap-2 ">
                <span className="text-nowrap">{children}</span>
                {sortable && (
                    <>
                        <div className="flex flex-col gap-1">
                            <ChevronUpIcon
                                className={
                                    "w-3.5 " +
                                    (queryParams.sort_field === name &&
                                    queryParams.sort_direction === "asc"
                                        ? "text-blue-500 dark:text-white"
                                        : "")
                                }
                            />
                            <ChevronDownIcon
                                className={
                                    "w-3.5 -mt-2 " +
                                    (queryParams.sort_field === name &&
                                    queryParams.sort_direction === "desc"
                                        ? "text-blue-500 dark:text-white"
                                        : "")
                                }
                            />
                        </div>
                    </>
                )}
            </div>
        </th>
    );
}

export default TableHeading;
