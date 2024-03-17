"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DonationFom = () => {
  return (
    <Card className="mx-auto mb-10 max-w-md">
      <CardContent>
        <form className="mt-5 space-y-3">
          <div>
            <Label htmlFor="fullName">Full Name:</Label>
            <Input type="text" id="fullName" name="fullName" required />
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth:</Label>
            <Input type="date" id="dob" name="dob" required />
          </div>

          <div>
            <Label htmlFor="bloodtype">Blood Type:</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your blood gorup" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unknown">Unknown</SelectItem>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="email">Email Address:</Label>
            <Input type="email" id="email" name="email" required />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number:</Label>
            <Input type="tel" id="phone" name="phone" required />
          </div>

          <div>
            <Label>Have you donated blood before?</Label>
            <RadioGroup defaultValue="no" className="flex items-center gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Do you have any chronic medical conditions?</Label>
            <RadioGroup defaultValue="no" className="flex items-center gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Are you currently taking any medications?</Label>
            <RadioGroup defaultValue="no" className="flex items-center gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Have you had any recent illnesses or surgeries?</Label>
            <RadioGroup defaultValue="no" className="flex items-center gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit">Schedule Donation</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationFom;
