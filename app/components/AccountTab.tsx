"use client";

import { useState } from "react";
import { useGlobalState } from "@/app/contexts/GlobalState";
import { DeleteAccountDialog } from "./DeleteAccountDialog";

const AccountTab = () => {
  const { setMigrateFromPentestgptDialogOpen } = useGlobalState();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h4 className="text-sm font-medium">Delete Account</h4>
          <p className="mt-1 text-sm text-muted-foreground">
            Permanently delete your account and all associated data.
          </p>
          <button
            onClick={() => setDeleteDialogOpen(true)}
            className="mt-3 rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete Account
          </button>
        </div>
      </div>

      <DeleteAccountDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
      />
    </div>
  );
};

export default AccountTab;
