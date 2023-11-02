function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.369899092546!2d-0.13474060000000002!3d51.497758149999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ddae95b455%3A0xcd1d64863bc57f40!2sWestminster%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1696418805039!5m2!1sen!2s"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  );
}

export default GoogleMap;