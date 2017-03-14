package lt.itakademija.servlet;

import java.io.IOException;
import java.util.Collections;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Service;

/**
 * Created by lenovo on 2/20/2017.
 */
@Service
public final class RequestFormatter {
    /**
     * Returns a string representation of a http request.
     *
     * @param request http request
     * @return http request formatted as a string
     * @throws IOException
     */

    public String formatForLog(final HttpServletRequest request) throws IOException {
        StringBuilder sb = new StringBuilder();
        String loginURI = "'/users/login'";
        sb.append("(");
        sb.append("URI: '").append(request.getRequestURI()).append("'");
        sb.append(", ");
        sb.append("METHOD: '").append(request.getMethod()).append("'");
        sb.append(", ");

        sb.append("PARAMS: [");
        boolean firstParameter = true;
        for (String paramName : Collections.list(request.getParameterNames())) {
            if (!firstParameter) {
                sb.append("; ");
            }
            sb.append(paramName).append("='").append(request.getParameter(paramName)).append("'");
            firstParameter = false;
        }
        sb.append("]");
        sb.append(", ");

        if (loginURI.equals(request.getRequestURI().toString())) {
            sb.append("BODY: ");
        } else {
            sb.append("BODY: ").append(IOUtils.toString(request.getReader()));
        }

        sb.append(")");

        return sb.toString();

    }
}
