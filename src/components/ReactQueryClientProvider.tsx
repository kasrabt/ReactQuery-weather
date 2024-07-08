"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { type ChildrenProps } from "~/types/DataTypes";

export default function ReactQueryClientProvider({ children }: ChildrenProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
  );
}
