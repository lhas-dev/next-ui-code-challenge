"use client";

import { useEffect, useState } from "react";

import useUsers from "@/hooks/useUsers";
import UsersTable from "@/components/users-table";
import AddUserForm from "@/components/add-user-form";
import { User } from "@/types";
import SearchBar from "@/components/search-bar";

export default function Home() {
  const [data, setData] = useState<Array<User>>([]);
  const { data: rawData, isError, isLoading } = useUsers();

  const onAdd = (data: any) => {
    setData((prevData) => [
      {
        id: prevData.length + 1,
        ...data,
        address: {
          city: data.city,
        },
      },
      ...prevData,
    ]);
  };

  const onSearch = (value: string) => {
    if (value === "" && rawData) {
      setData(rawData);

      return;
    }

    const filteredData = data.filter((user) => {
      const loweredValue = value.toLowerCase();

      const name = user.name.toLowerCase();
      const email = user.email.toLowerCase();
      const address = user.address.city.toLowerCase();

      return (
        name.includes(loweredValue) ||
        email.includes(loweredValue) ||
        address.includes(loweredValue)
      );
    });

    setData(filteredData);
  };

  useEffect(() => {
    if (!isError) return;

    alert("There's a error while fetching users data.");
  }, [isError]);

  useEffect(() => {
    if (!rawData || rawData?.length === 0) return;

    setData(rawData);
  }, [rawData]);

  if (!data) return null;

  return (
    <section className="container mx-auto my-2">
      <SearchBar onSearch={onSearch} />
      {!isLoading && <UsersTable data={data} />}
      <AddUserForm onAdd={onAdd} />
    </section>
  );
}
