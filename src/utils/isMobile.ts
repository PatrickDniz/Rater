import { headers } from "next/headers";

function regexMobile(userAgent: string | null) {
  if (!userAgent) return false;
  return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}


export default function useSsrMobile() {
  const headersList = headers();
  const useAgent: string | null = headersList.get("user-agent");
  const isMobile: boolean = Boolean(regexMobile(useAgent));
  return { isMobile };
}