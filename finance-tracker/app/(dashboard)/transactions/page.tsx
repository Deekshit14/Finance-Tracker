"use client";

import React, { Suspense } from "react";
import { TransactionPageContent } from "./transaction-page-content";
// import { TransactionPageContent } from "./transaction-page-content"; // Extract content to a new component

const TransactionPage = () => {
  return (
    <Suspense fallback={<div>Loading transactions...</div>}>
      <TransactionPageContent />
    </Suspense>
  );
};

export default TransactionPage;
