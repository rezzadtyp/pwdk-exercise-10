import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Skeleton */}
        <div className="mb-6">
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Article Content Skeleton */}
        <article className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-8 w-3/4" />

                {/* Article Meta Skeleton */}
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
}
