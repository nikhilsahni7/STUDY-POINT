import { RocketIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "./ui/button";

export function AlertHero() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Alert className="flex-1">
        <RocketIcon className="h-4 w-4" />
        <div className="flex flex-col ml-2">
          <AlertTitle>
            Heads up!
            <Button
              onClick={() =>
                window.open("https://github.com/nikhilsahni7", "_blank")
              }
              variant="link"
              className="ml-2"
            >
              Contribute
            </Button>
          </AlertTitle>
          <AlertDescription>
            You can also contribute to our codebase or add resources here to
            help.
          </AlertDescription>
        </div>
      </Alert>

      <Alert className="flex-1 space-y-2">
        <EnvelopeClosedIcon className="h-4 w-4" />
        <div className="flex flex-col ml-2 space-y-2">
          <AlertTitle>Subscribe to us</AlertTitle>
          <AlertDescription>
            Subscribe to our newsletter to get the latest updates and news.
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
}
