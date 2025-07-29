import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftIcon, FileXIcon } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto text-center shadow-lg">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <FileXIcon className="w-16 h-16 text-gray-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Blog Not Found
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/blog">
                <Button className="w-full">
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back to Blog List
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Go to Homepage
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
