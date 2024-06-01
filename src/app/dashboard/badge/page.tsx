import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge>default</Badge>
      <Badge variant="destructive">Badge</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="success" capitalize={true}>success</Badge>
      <Badge variant="info" capitalize={true}>info</Badge>
    </div>
  );
}