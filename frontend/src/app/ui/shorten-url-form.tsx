"use client";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
    Link,
    FormControl,
} from "@mui/material";
interface FormValues {
    url: string;
}

const validateUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};
export default function ShortenURLForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm<FormValues>();

    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const { url } = data;

        // Validate URL using the custom function
        if (!validateUrl(url)) {
            setError("url", {
                type: "manual",
                message: "Please enter a valid URL.",
            });
            return;
        }

        setLoading(true);
        clearErrors("url");

        try {
            // Replace with your URL shortening service endpoint
            // const response = await axios.post("/api/shorten", { url });
            setShortUrl("helloworld");
            // setShortUrl(response.data.shortUrl);
        } catch (err) {
            setError("url", {
                type: "manual",
                message: "Failed to shorten URL.",
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <Box >
            <Box component="form" onSubmit={handleSubmit(onSubmit)} className="w-full">
                <TextField
                    label="Enter URL"
                    variant="outlined"
                    fullWidth
                    sx={{ marginTop: 0 }}
                    margin="normal"
                    {...register("url", {
                        required: "URL is required",
                        validate: {
                            isValid: (value) =>
                                validateUrl(value) ||
                                "Please enter a valid URL",
                        },
                    })}
                    error={!!errors.url}
                    helperText={errors.url?.message}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    {loading ? "Shortening..." : "Shorten URL"}
                </Button>
            </Box>
            {shortUrl && (
                <Typography variant="h6" gutterBottom className="w-full">
                    Shortened URL: <br />
                    <Link
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {shortUrl}
                    </Link>
                </Typography>
            )}
        </Box>
    );
}
