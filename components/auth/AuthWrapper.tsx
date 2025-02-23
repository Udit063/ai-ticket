import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

interface AuthWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription: string;
  backLabel: string;
  backLabel2: string;
  backLabelHref: string;
  oauth: boolean;
}

export const AuthWrapper = ({
  children,
  headerLabel,
  headerDescription,
  backLabel,
  backLabel2,
  backLabelHref,
  oauth,
}: AuthWrapperProps) => {
  return (
    <Card className="w-full mx-3 md:w-3/5 xl:mx-0 xl:w-1/4 flex flex-col border-none">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          {headerLabel}
        </CardTitle>
        <CardDescription className="text-center text-gray-500">
          {headerDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
        {oauth && (
          <>
            <div className="flex flex-row w-full items-center justify-center gap-2 mt-4 text-[#D0D1D2]">
              <div className="w-[40%] border h-[2px]"></div>
              <div className="text-[#838485]">or</div>
              <div className="w-[40%] border h-[2px]"></div>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-500">
          {backLabel}{" "}
          <Link
            href={backLabelHref}
            className="text-purple-600 hover:underline"
          >
            {backLabel2}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
