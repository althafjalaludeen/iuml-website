import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  members,
  getMemberWithDetails,
  getMembersByCommittee,
} from "@/src/data/organization";
import { MemberProfile } from "@/src/components/organization/MemberProfile";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return members.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = getMemberWithDetails(id);

  if (!member) {
    return {
      title: "Member Not Found",
    };
  }

  return {
    title: `${member.name} — ${member.designation}`,
    description: `Official leadership profile for ${member.name}, ${member.designation} of the ${member.organization.name} (${member.committee.name}).`,
  };
}

export default async function MemberPage({ params }: Props) {
  const { id } = await params;
  const member = getMemberWithDetails(id);

  if (!member) {
    notFound();
  }

  const colleagues = getMembersByCommittee(member.committeeId);

  return <MemberProfile member={member} colleagues={colleagues} />;
}
