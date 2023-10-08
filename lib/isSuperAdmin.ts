export const isSuperAdmin = (email?: string | null) =>
  !!(
    email &&
    `${process.env.SUPER_ADMIN}`
      .split(",")
      .map((x) => x.trim())
      .includes(email)
  );
