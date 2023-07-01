import { GoogleAuth } from "./OAuth/GoogleAuth";

interface OAuthsProps {}

export function OAuths({}: OAuthsProps) {
  return (
    <div>
      <GoogleAuth />
    </div>
  );
}
