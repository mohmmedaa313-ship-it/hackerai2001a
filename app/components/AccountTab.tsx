"use client";

import { useGlobalState } from "@/app/contexts/GlobalState";
import DeleteAccountDialog from "./DeleteAccountDialog";

const AccountTab = () => {
  const { setMigrateFromPentestgptDialogOpen } = useGlobalState();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Account</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings.
          </p>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-2">Delete Account</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Permanently delete your account and all associated data.
        </p>
        <DeleteAccountDialog />
      </div>
    </div>
  );
};

export default AccountTab;
