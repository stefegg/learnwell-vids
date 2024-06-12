"use client";
import Link from "next/link";

export default function InnerVideoList(props: any) {
  const { videos } = props;

  return (
    <div>
      {videos?.videos?.map((v: any, idx: any) => (
        <Link key={`${v.id}-${idx}`} href={`/watch/${v.id}`}>
          <div>{v.title}</div>
        </Link>
      ))}
    </div>
  );
}
