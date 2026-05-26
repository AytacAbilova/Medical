"use client";

import type { ReactNode } from "react";

type Column<T> = {
  key: string;
  header: ReactNode;
  cell: (row: T) => ReactNode;
  className?: string;
};

type Props<T> = {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
};

export default function Table<T>({ columns, rows, rowKey }: Props<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-100 bg-white">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="bg-[#F8F9FB]">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={["text-left px-4 py-3 font-extrabold text-[#001a56]", c.className].filter(Boolean).join(" ")}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-10 text-center text-[#465271]">
                Məlumat yoxdur.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={rowKey(row)} className="border-t border-gray-100">
                {columns.map((c) => (
                  <td key={c.key} className={["px-4 py-3 text-[#2d3a57]", c.className].filter(Boolean).join(" ")}>
                    {c.cell(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

