import SortButton from "./SortButton";

export default function TableHeader({ columns }: { columns: string[] }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        {columns.map((column, idx) => (
          <th scope="col" className="px-6 py-3" key={idx}>
            <div className="flex items-center">
              {column}
              {/* <SortButton onSort={() => onSort(column)} /> */}
              {column !== "" && <SortButton />}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
