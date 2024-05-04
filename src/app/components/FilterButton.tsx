import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { filterTodos } from "@/redux/actions";

const FilterButton: React.FC = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state: RootState) => state.filter);
    
    const handleFilter = (filter: string) => {
        dispatch(filterTodos(filter));
    };

    return (
        <div className={"flex space-x-4 items-center p-8"}>
            <select
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
                className="inline-flex w-full justify-center py-2 bg-violet-300 rounded-lg"
            >
                <option value="ALL">All</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>
        </div>
    );
};

export default FilterButton;