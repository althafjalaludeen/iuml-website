import { redirect } from "next/navigation";
import { getMember } from "@/src/data/organization";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CommitteeMemberProfilePage({ params }: Props) {
  const { id } = await params;
  const member = getMember(id);

  if (member) {
    redirect(`/organization/member/${member.id}`);
  } else {
    redirect("/organization");
  }
}
