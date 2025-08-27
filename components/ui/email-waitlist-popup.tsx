"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2,
  X,
  Phone,
  User,
} from "lucide-react";

interface EmailWaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
  partName?: string;
}

export default function EmailWaitlistPopup({
  isOpen,
  onClose,
  partName,
}: EmailWaitlistPopupProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    status: "idle" as "idle" | "loading" | "success" | "error",
    message: "",
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[0-9]{10,15}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Please enter your name",
      }));
      return;
    }

    if (!form.phone.trim() || !validatePhone(form.phone)) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Please enter a valid phone number",
      }));
      return;
    }

    if (!form.email.trim() || !validateEmail(form.email)) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Please enter a valid email address",
      }));
      return;
    }

    setForm((prev) => ({ ...prev, status: "loading", message: "" }));

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setForm((prev) => ({
        ...prev,
        status: "success",
        message:
          "Great! You've been added to our waitlist. We'll notify you when we launch!",
      }));
    } catch (error) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Something went wrong. Please try again.",
      }));
    }
  };

  const handleClose = () => {
    setForm({ name: "", phone: "", email: "", status: "idle", message: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-serif font-bold text-white">
              Join Our Waitlist
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {form.status === "success" ? (
            <div className="text-center py-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-2">
                You're on the list!
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {form.message}
              </p>
              <Button
                onClick={handleClose}
                className="mt-4 bg-secondary hover:bg-secondary/90 text-black font-bold"
              >
                Got it!
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2">
                  Get notified when we launch!
                </h3>
                <p className="text-gray-300 text-sm">
                  {partName
                    ? `Be the first to find "${partName}" and thousands of other auto parts instantly.`
                    : "Be the first to experience Nigeria's smartest auto parts platform."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                      status: "idle",
                      message: "",
                    }))
                  }
                  className="w-full px-4 py-3 text-sm border-2 rounded-lg bg-gray-800/50 text-white placeholder:text-gray-400 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  disabled={form.status === "loading"}
                />

                {/* Phone */}
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                      status: "idle",
                      message: "",
                    }))
                  }
                  className="w-full px-4 py-3 text-sm border-2 rounded-lg bg-gray-800/50 text-white placeholder:text-gray-400 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  disabled={form.status === "loading"}
                />

                {/* Email */}
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                      status: "idle",
                      message: "",
                    }))
                  }
                  className={`w-full px-4 py-3 text-sm border-2 rounded-lg bg-gray-800/50 text-white placeholder:text-gray-400 ${
                    form.status === "error" && form.message.includes("email")
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/30"
                      : "border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  }`}
                  disabled={form.status === "loading"}
                />

                {form.status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-900/20 px-3 py-2 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-xs">{form.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={form.status === "loading"}
                  className="w-full px-6 py-3 text-sm font-bold rounded-lg shadow-lg bg-secondary hover:bg-secondary/90 text-black flex items-center justify-center gap-2"
                >
                  {form.status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Joining waitlist...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <Mail className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-gray-400">
                  We'll only contact you when we launch.
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
