"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";

const RequestFormModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    carModel: "",
    requestType: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.requestType
    ) {
      setSubmitMessage("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitMessage("✅ Thank you! We'll contact you within 24 hours.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        carModel: "",
        requestType: "",
        description: "",
      });
      setTimeout(() => setOpen(false), 2000);
    } catch (error) {
      setSubmitMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger button */}
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="px-6 py-3 text-base sm:text-lg font-bold rounded-xl w-full sm:w-auto"
        >
          Request Service
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="w-[95%] sm:w-full max-w-md sm:max-w-2xl rounded-2xl max-h-[95vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl sm:text-2xl">
            Get Started Today
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Tell us what you need and we’ll connect you with the right
            professionals.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Card className="border-2 border-primary/20">
            <CardContent className="space-y-6 pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Car Model */}
                <div className="space-y-2">
                  <Label htmlFor="carModel">Car Make & Model</Label>
                  <Input
                    id="carModel"
                    placeholder="e.g., 2018 Honda Civic"
                    value={formData.carModel}
                    onChange={(e) =>
                      handleInputChange("carModel", e.target.value)
                    }
                  />
                </div>

                {/* Request Type */}
                <div className="space-y-2">
                  <Label htmlFor="requestType">What do you need? *</Label>
                  <Select
                    value={formData.requestType}
                    onValueChange={(value: string) =>
                      handleInputChange("requestType", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mechanic">Find a Mechanic</SelectItem>
                      <SelectItem value="part">Find a Part</SelectItem>
                      <SelectItem value="both">
                        Both Mechanic & Parts
                      </SelectItem>
                      <SelectItem value="quote">Get a Quote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Describe your issue (optional)
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="e.g., Strange noise when braking"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                </div>

                {/* Feedback */}
                {submitMessage && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      submitMessage.includes("Thank you")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base sm:text-lg py-4 sm:py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequestFormModal;
