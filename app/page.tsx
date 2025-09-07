import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Circular Demo
          </h1>
          <p className="text-xl text-muted-foreground">
            Test the theme toggle in the header to switch between light and dark modes.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 border rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold">Light & Dark Theme</h2>
            <p className="text-muted-foreground">
              This application supports both light and dark themes. Click the theme toggle 
              button in the header to switch between them.
            </p>
            <Button>Sample Button</Button>
          </div>
          
          <div className="p-6 border rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold">Accessibility</h2>
            <p className="text-muted-foreground">
              The theme toggle is fully accessible with keyboard navigation, 
              screen reader support, and proper ARIA attributes.
            </p>
            <Button variant="outline">Another Button</Button>
          </div>
        </div>
        
        <div className="p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Theme Features:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Automatic system theme detection</li>
            <li>• Persistent theme preference</li>
            <li>• Smooth theme transitions</li>
            <li>• Accessible keyboard controls</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
