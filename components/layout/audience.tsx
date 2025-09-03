import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Car, CheckCircle, Users, Wrench } from "lucide-react";
import { Button } from "../ui/button";
import RequestFormModal from "./requestform";

const Audience = () => {
  return (
    <div>
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Built for Everyone in Automotive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need repairs, offer services, or sell parts, our
              platform connects you with the right people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Car Owners */}
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Car Owners</CardTitle>
                <CardDescription>
                  Get reliable repairs and quality parts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Find certified mechanics near you</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Compare prices and reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Get instant quotes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Quality guaranteed work</span>
                  </li>
                </ul>
                <Button className="w-full">Find a Mechanic</Button>
              </CardContent>
            </Card>

            {/* Mechanics */}
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Mechanics</CardTitle>
                <CardDescription>
                  Grow your business and reach more customers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Get more service requests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Manage appointments easily</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Build your reputation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Secure payment processing</span>
                  </li>
                </ul>
                <Button className="w-full">Join as Mechanic</Button>
              </CardContent>
            </Card>

            {/* Vendors */}
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">
                  Parts Vendors
                </CardTitle>
                <CardDescription>
                  Expand your reach and increase sales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Access nationwide market</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Inventory management tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Direct customer connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Competitive pricing tools</span>
                  </li>
                </ul>
                <Button className="w-full">Become a Vendor</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Audience;
